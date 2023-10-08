export default class Token {
    public constructor(
        public readonly name: string,
        public readonly value?: string | undefined
    ) {}

    /**
     * Get token as string
     */
    public get asString(): string {
        return this.value ? `${this.name}(${this.value})` : this.name;
    }
}
