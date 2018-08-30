export class AppSettings {
    private static get API_HOST(): string { return `localhost`; }
    private static get API_PORT(): string { return `3030`; }
    public static get API_ENDPOINT(): string { return `http://${this.API_HOST}:${this.API_PORT}`; }
}
