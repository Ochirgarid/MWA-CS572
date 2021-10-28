const express = require('express');
const superagent = require('superagent');

const { from, Subject } = require('rxjs');
const { map } = require('rxjs/operators');

const app = express();
app.enable('strict routing');
app.enable('case sensitive routing');

app.disable('etag');
app.disable('x-powered-by');

const superagentSubj$ = new Subject();

superagentSubj$.subscribe({
    next: async (res) => {
        const usersResult = await superagent.get(`https://randomuser.me/api/?results=10`);
        let users = [];
        from(usersResult.body.results).pipe(
            map((user, index) => {
                users[index] = user.name.first + " " + user.name.last;
            })
        ).subscribe();
        res.json({msg: users});
    }
});

const pages = {
    curPage : 0,
    firstPage: 0,
    lastPage: 9,
    nextPage: () => {
        return Math.min(this.curPage + 1, this.lastPage);
    },
    prevPage: () => {
        return Math.max(this.curPage - 1, this.firstPage);
    }
}

app.get('/users', async (req, res) => {
    superagentSubj$.next(res)
    // pages.curPage = req.params.get("page") || 1;
    res.links({
        first: `https://randomuser.me/api/?page=${pages.firstPage}&results=10&seed=abc`,
        prev: `https://randomuser.me/api/?page=${pages.prevPage()}&results=10&seed=abc`,
        next: `https://randomuser.me/api/?page=${pages.nextPage()}&results=10&seed=abc`,
        last: `https://randomuser.me/api/?page=${pages.lastPage}&results=10&seed=abc`
    });
    res.set('Cache-control', 'private, max-age=86400');
    
})

app.listen(8000, _=>console.log("Listening on port=8000"))
