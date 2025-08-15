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
	Math = Math;

	recentActivity: { name: string, amount: number }[] = [];

	ngOnInit(): void {
		this.generateRandomActivity();
	}

	generateRandomActivity(): void {
		const companies = ['ATCQ Inc.', 'De La Soul LLC', 'J Dilla Beats', 'MF DOOM Rhymes', 'Tribe Records'];
		this.recentActivity = [];
		for (let i = 0; i < 5; i++) {
			const company = companies[Math.floor(Math.random() * companies.length)];
			let amount = Math.floor(Math.random() * 1000) + 100;
			if (Math.random() < 0.5) {
				amount *= -1;
			}
			this.recentActivity.push({ name: company, amount: amount });
		}
	}
}
