import {defineField, defineType} from 'sanity';
import {UserIcon} from 'lucide-react';
import Image from 'next/image';
import { User } from '@clerk/nextjs/server';

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email(),
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'url',
        }),
        defineField({
            name: 'joinedAt',
            title: 'Joined At',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'isReported',
            title: 'Is Reported',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'username',
            media: 'imageUrl',
        },
        prepare({title, media}) {
            return {
                title,
                media: media ? (
                    <Image src={media} alt={title} width={100} height={100} />
                ) : (
                    <UserIcon />
                ),
            };
        },
    },
});