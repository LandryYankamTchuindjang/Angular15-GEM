class Role {
    constructor(
        public id?: number,
        public type?: string,
        public fonction?: string,
        public idEntreprise?: number,
        public autorisation?:Array<Autorisation>
      
    ) {}
}
