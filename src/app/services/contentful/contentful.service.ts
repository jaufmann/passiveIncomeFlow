import { Injectable } from '@angular/core';
import {createClient} from 'contentful';

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
        const promise = this.cdaClient.getEntry('1MYJFahm1BBazeuxyySjG5').then(r => r);
        return promise;
    }

    getDepot() {
        const promise = this.cdaClient.getEntry('6JMZQOvbUMIrLc8oeD1xQ').then(r => r);
        return promise;
    }

    getImpressum() {
        const promise = this.cdaClient.getEntry('6KUe87ahd5Fsve02oeAxhz').then(r => r);
        return promise;
    }

    getBooks() {
        const promise = this.cdaClient.getEntry('6yHrsNmkchm21txveQ0Cmc').then(r => r);
        return promise;
    }

    getTools() {
        const promise = this.cdaClient.getEntry('64uJCtSrGEMqbv7lkdrY2O').then(r => r);
        return promise;
    }
}
