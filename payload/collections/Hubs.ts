import type { CollectionConfig } from "payload";

import { adminsOnly, publishedOrSignedIn } from "@/payload/access";
import { layoutBlocks } from "@/payload/blocks";
import { slugField } from "@/payload/fields/slug";
import { revalidateCollection, revalidateCollectionDelete } from "@/payload/hooks/revalidate";

const hubPaths = (doc: Record<string, unknown>) => [`/hubs/${typeof doc.slug === "string" ? doc.slug : ""}`];

/** `hub-ulaanbaatar`, `hub-21-aimag`, `hub-faith-orgs`. */
export const Hubs: CollectionConfig = {
    slug: "hubs",
    labels: { singular: "ХАБ", plural: "ХАБ" },
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "slug", "updatedAt"],
        group: "Агуулга"
    },
    access: {
        read: publishedOrSignedIn,
        create: adminsOnly,
        update: adminsOnly,
        delete: adminsOnly
    },
    versions: { drafts: true },
    hooks: {
        afterChange: [revalidateCollection(hubPaths)],
        afterDelete: [revalidateCollectionDelete(hubPaths)]
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            localized: true
        },
        slugField("name"),
        {
            name: "region",
            type: "text",
            localized: true,
            admin: { position: "sidebar" }
        },
        {
            name: "layout",
            type: "blocks",
            label: "Хуудасны хэсгүүд",
            blocks: layoutBlocks
        }
    ]
};
