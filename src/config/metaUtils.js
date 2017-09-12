import { HOST } from "./env";
export function getMetaIndex(title, description, routeName, imageUrl, isIndex, author) {
    let metaRobot = 'noindex';
    if (process.env.NODE_ENV == "production") {
        if (isIndex) {
            metaRobot = "index";
        }
    }

    let metaIndex = {
        title: title,
        description: description,
        meta: {
            name: {
                robots: metaRobot,
                'twitter:card': 'summary_large_image',
                'twitter:image': HOST + imageUrl,
                'twitter:description': description,
                'twitter:title': title,
                'twitter:site': '',
                'twitter:creator': ''
            },

            property: {
                'og:locale': 'en_US',
                'og:type': 'website',
                'og:title': title,
                'og:image': HOST + imageUrl,
                'og:description': description,
                'og:url': HOST + routeName,
                'og:site_name': 'React Biolerplate'
            }
        },
        link: {
            rel: {
                publisher: 'https://github.com/john1jan',
                canonical: HOST + routeName
            }
        }
    };

    if (typeof author != 'undefined') {
        metaIndex['meta'].name['author'] = author;
    }
    
    return metaIndex;
}


export function getDefaultMeta() {
    let title = "React BiolerPlate With Route Based Chunking";
    let desc = '';
    let imageUrl = 'resources/logo.svg';
    let routeName = "";
    return getMetaIndex(title, desc, routeName, imageUrl);
}

export function getNoIndexMeta() {
    let metaIndex = {
        meta: {
            name: {
                robots: "noindex",
            }
        }
    }
    return metaIndex;
}