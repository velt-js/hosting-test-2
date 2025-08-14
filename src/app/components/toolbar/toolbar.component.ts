import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk/menu';
import { initVelt } from '@veltdev/client';
import { Velt } from "@veltdev/types"

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss',
	standalone: true,
	imports: [CommonModule, CdkMenuModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarComponent implements OnInit {


	client: Velt | null = null;

	async ngOnInit() {
		this.client = await initVelt('AN5s6iaYIuLLXul0X4zf');
		this.setUser();
		this.setDocument();
		this.client?.setDarkMode(true);
	}

	setUser() {
		if (this.client) {
			const user = {
				userId: '123',
				organizationId: 'hosting-test', // this is the organization id the user belongs to. You should always use this.
				name: 'John Doe',
				email: 'john.doe@example.com',
			};
			this.client.identify(user);
		}
	}

	// set document in velt
	setDocument() {
		if (this.client) {
			this.client.setDocument('hosting-test', { documentName: 'Hosting Test' });
		}
	}

	onMenuAction(action: 'settings' | 'help' | 'signout') {
		// Placeholder actions; replace with real handlers as needed
		if (action === 'signout') {
			// sign out logic
		}
	}

}
