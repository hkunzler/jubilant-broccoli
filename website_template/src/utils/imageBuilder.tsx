import imageUrlBuilder from "@sanity/image-url";
import {client} from "@/lib/api";

export const imageBuilder = (image: any) => {
    const builder = imageUrlBuilder(client);
    const imageUrlFor = (source: any) => builder.image(source);
    let url;
    if (image) {
        url = imageUrlFor(image).url();
    } else {
        url = "";
    }
    return url;
}