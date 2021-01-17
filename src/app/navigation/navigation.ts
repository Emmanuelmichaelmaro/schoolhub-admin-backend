import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'admission',
                title: 'Admission',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'email',
                url: '/admission',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF',
                },
            },
            {
                id: 'collaborator',
                title: 'Collaborator',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'person_add',
                url: '/collaborator',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF',
                },
            },
            {
                id: 'courses',
                title: 'Courses',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'assignment',
                url: '/courses',
            },
            {
                id: 'student',
                title: 'Student',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'person_add',
                url: '/student',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF',
                },
            },
        ],
    },
];
