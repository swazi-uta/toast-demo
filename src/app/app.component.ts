import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'toast-demo';
	
	constructor(
		private toastr: ToastrService
	) { }

	public showSuccess() {
		this.toastr.success('登録されました。', '【システムからの通知】');
	}
}
