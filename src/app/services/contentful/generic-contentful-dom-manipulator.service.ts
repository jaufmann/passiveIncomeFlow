import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericContentfulDomManipulatorService {

  constructor() { }

    parseContentToHTMLDomElements(contentFullRichMediaContent, type): string {
      let hmtlChain = '';
      const contentType = 'richtext';

      for (const content of contentFullRichMediaContent.fields[contentType].content) {
          if (content.nodeType === 'paragraph') {
              hmtlChain = hmtlChain + this.paragraph(content);
          } else if (content.nodeType === 'ordered-list' || content.nodeType === 'unordered-list') {
              hmtlChain = hmtlChain + this.orderedList(content, content.nodeType);
          } else if (content.nodeType.includes('heading-')) {
              hmtlChain = hmtlChain + this.heading(content, content.nodeType);
          } else if (content.nodeType.includes('embedded-asset-block')) {
              hmtlChain = hmtlChain + this.image(content);
          } else if (content.nodeType.includes('embedded-entry-inline')) {
              hmtlChain = hmtlChain + this.embededEntry(content);
          }

      }

      return hmtlChain;
  }

    private orderedList(content, nodeType) {
        const listType = nodeType === 'ordered-list' ? 'ol' : 'ul';
        let ul = `<${listType}>`;
        for (const c of content.content) {
            let list = '<li>';
            for (const cc of c.content) {
                list = list + this.paragraph(cc);
            }
            list = list + '</li>';
            ul = ul + list;
        }

        return ul +  `</${listType}>`;
    }

    private heading(content, nodeType) {
        const headingNumber = nodeType.substring(nodeType.length - 1, nodeType.length);
        let headingStart = `<h${headingNumber}>`;

        for (const c of content.content) {
            headingStart += c.value;
        }

        return headingStart + `</h${headingNumber}>`;
    }


    private paragraph(content) {
        let hmtlChain = '<p>';
        for (const c of content.content) {

            if (c.nodeType === 'hyperlink') {
                hmtlChain += this.hyperLink(c);
            } else if(c.nodeType === 'embedded-entry-inline') {
                hmtlChain += this.embededEntry(c)
            } else {
                let value = c.value;

                if (value === "") {
                    hmtlChain += '<br>'
                } else {
                    if  (c.marks && c.marks.length !== 0) {
                        for (const m of c.marks) {
                            if (m.type === 'bold') {
                                value = '<b>' + value + '</b>';
                            }
                        }
                    }

                    hmtlChain += value;
                }
            }
        }

        return hmtlChain + '</p>';
    }

    private hyperLink(content) {
        let a = `<a href='`;

        a += `${content.data.uri}'>`;
        for (const c of content.content) {
            a += c.value;
        }

        return a + '</a>';
    }

    private image(content) {
        let img = `<img src='${content.data.target.fields.file.url}'>`;

        return img;
    }


    private embededEntry(content) {

      console.log("content", content.data.target.fields.media.fields.file.url)
        let img = `<div style="display: flex; justify-content: ${content.data.target.fields.align}">
                    <img src='https://${content.data.target.fields.media.fields.file.url}' 
                        width='${content.data.target.fields.width}'
                        height='${content.data.target.fields.height}'>
                    </div>`;

        return img;
    }

}
