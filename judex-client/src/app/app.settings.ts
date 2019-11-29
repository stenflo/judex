import { environment } from './../environments/environment';

export class AppSettings {
    public static get API_ENDPOINT(): string { return `${environment.JUDEX_API_URL}`; }
}
