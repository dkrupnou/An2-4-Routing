import { Component } from '@angular/core';
import { MessagesService } from './core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public messagesService: MessagesService,
    private router: Router) { }

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }

  onActivate($event) {
    console.log('Activated Component', $event);
 }

 onDeactivate($event) {
   console.log('Deactivated Component', $event);
 }
}
