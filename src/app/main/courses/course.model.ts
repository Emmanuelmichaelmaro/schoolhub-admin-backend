import { FuseUtils } from '@fuse/utils';
import { List } from './list.model';

export class Course {
    name: string;
    uri: string;
    id: string;
    settings: {
        color: string;
        subscribed: boolean;
        cardCoverImages: boolean;
    };
    lists: List[];
    members: Array<{
        id: string;
        name: string;
        avatar: string;
    }>;
    labels: Array<{
        id: string;
        name: string;
        color: string;
    }>;

    /**
     * Constructor
     *
     * @param board
     */
    constructor(course) {
        this.name = course.name || 'Untitled Board';
        this.uri = course.uri || 'untitled-board';
        this.id = course.id || FuseUtils.generateGUID();
        this.settings = course.settings || {
            color: '',
            subscribed: true,
            cardCoverImages: true,
        };
        this.lists = [];
    }
}
