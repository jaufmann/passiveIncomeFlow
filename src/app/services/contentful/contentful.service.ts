// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import {createClient, Entry, EntryCollection} from 'contentful';
import {from, Observable} from "rxjs";

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
    space: 'fh8o0elpc9nz',
    accessToken: 'tiqnB9Wow4ZdXeQa9SUW_87pLEt_3_qyC7ptxS5w80g',
};

@Injectable()
export class ContentfulService {
    private cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.accessToken
    });

    constructor() { }

    logContent(contentId) {
        this.cdaClient.getEntry(contentId).then(entry => console.log(entry));
    }

    getContent(contentId, skip?: any) {
        const promise = this.cdaClient.getEntries({
            content_type: contentId,
            limit: 2,
            skip: skip
        }).then(r => r.items);
        return promise;
    }

    getSingleBlogPost(contentId) {
        const promise = this.cdaClient.getEntry(contentId).then(r => r);
        return promise;
    }

    getDatenschutz() {
        const promise = this.cdaClient.getEntry('3FDZsGggh4BCXkWzHtWJFh').then(r => r);
        return promise;
    }

    getDepot() {
        const promise = this.cdaClient.getEntry('3bGb6PYZI8rCMt8NU3SZ7Z').then(r => r);
        return promise;
    }
}
