import {Component} from '@angular/core';
import {LinkModel} from './models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  links: LinkModel[] = [
    {title: 'Home', url: '/'},
    {title: 'About', url: '/about'},
    {
      title: 'Demo',
      url: '/demo',
      children: [
        {title: 'Demo bindings', url: '/demo/demo01'},
        {title: 'Demo pipes', url: '/demo/demo02'},
        {title: 'Demo directives', url: '/demo/demo03'},
        {title: 'Demo input / output', url: '/demo/demo04'},
      ],
      isChildrenVisible: false
    },
    {
      title: 'Exo',
      children: [
        {title: 'Exo timer', url: '/exo/exo01'},
      ],
      isChildrenVisible: false
    },
  ];

  togleIsChildrenVisible(link: LinkModel) {
    for (let l of this.links) {
      if (l !== link) {
        l.isChildrenVisible = false;
      }
    }
    link.isChildrenVisible = !link.isChildrenVisible;
  }
}
