export class Colaborator {
    email: string;
    schoolid: string;

    /**
     * Constructor
     *
     * @param colaborator
     */
    constructor(colaborator) {
        {
            this.schoolid = colaborator.schoolid || '';
            this.email = colaborator.email || '';
        }
    }
}
