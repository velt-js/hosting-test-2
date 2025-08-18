import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChatService } from 'src/app/services/chat.service';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [AsyncPipe, CommonModule, ToolbarComponent],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
	chatService = inject(ChatService);
	user$ = this.chatService.user$;
	transactions = [
		{ name: 'Tribe Records', type: 'record', date: '22/08/2024', amount: 1066, recipient: '' },
		{ name: 'J Dilla Beats', type: 'beats', date: '22/08/2024', amount: 888, recipient: '' },
		{ name: 'De La Soul LLC', type: 'record', date: '22/08/2024', amount: 355, recipient: '' },
		{ name: 'De La Soul LLC', type: 'record', date: '22/08/2024', amount: 331, recipient: '' },
		{ name: 'De La Soul LLC', type: 'record', date: '22/08/2024', amount: -999, recipient: '' }
	];

	ngOnInit(): void {
	}

}
