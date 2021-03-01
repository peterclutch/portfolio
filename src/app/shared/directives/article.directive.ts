import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[phArticle]',
})
export class ArticleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
