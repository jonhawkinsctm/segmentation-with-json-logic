import { SegmentationDefinition } from "../types";

export const byFavouriteColor: SegmentationDefinition = {
    name: "by-favourite-color",
    segmentationTarget: "Person",
    segments: [
        {
            name: "Likes Blue",
            id: "person-color-blue",
            rule: {
                "==": [{ var: "favouriteColor" }, "blue"],
            },
        },
        {
            name: "Likes Red",
            id: "person-color-red",
            rule: {
                "==": [{ var: "favouriteColor" }, "red"],
            },
        },
        {
            name: "Likes Yellow",
            id: "person-color-yellow",
            rule: {
                "==": [{ var: "favouriteColor" }, "yellow"],
            },
        },
        {
            name: "Likes Green",
            id: "person-color-green",
            rule: {
                "==": [{ var: "favouriteColor" }, "green"],
            },
        },
        {
            name: "Likes Purple",
            id: "person-color-purple",
            rule: {
                and: [{ or: [{ var: "fff" }, 2131] }],
            },
        },
    ],
};
