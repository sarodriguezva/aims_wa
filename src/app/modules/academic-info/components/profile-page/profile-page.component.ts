import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetMyProfileGQL,
    GetMyProfileQuery,
} from 'src/app/services/graphql/generated/profile.gql.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
    editable: boolean = false;
    profile$!: Observable<GetMyProfileQuery['getMyProfile']>;
    profile = {
        address: '',
        birthdate: '',
        email: '',
        historials: [
            {
                career: 0,
                coursed_credits: 0,
                approved_credits: 0,
                reprobed_credits: 0,
                GPA: 0,
            },
        ],
        lastname: '',
        name: '',
        phone_number: '',
        user_id: '',
    };

    constructor(
        private profileGQL: GetMyProfileGQL,
        private _snackBar: MatSnackBar,
        private loading: LoadingOverlayService
    ) {}

    openSnackBar(message: string) {
        this._snackBar.open(message, undefined, {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 2000,
        });
    }

    async ngOnInit() {
        this.loading.show();
        try {
            this.profile = await firstValueFrom(
                this.profileGQL.watch().valueChanges.pipe(
                    map((result) => {
                        return result.data.getMyProfile;
                    })
                )
            );
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }

    toggleEdit(fields: HTMLInputElement[]): void {
        fields.forEach((field) => {
            field.disabled = !field.disabled;
        });
    }
}
