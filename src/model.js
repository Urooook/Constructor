import {ColumnsBlock, TextBlock, TitleBlock} from "./classes/Block";

export const model = [
    new TitleBlock('Какое-то очко', {
        tag: 'h1',
        styles: {
            background: 'red',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odit?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odit?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odit?',
    ], {
        styles: {
            background: 'grey',
            color: '#fff',
            padding: '1.5rem',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur aut consectetur dolorum esse est exercitationem facilis, fuga illo itaque labore maxime nemo quae sint sit sunt tempore totam.\n',
        {
            styles: {
                background: 'black',
                color: '#fff',
                padding: '1.5rem',
                'font-weight': 'bold'
            }
        }
    )
]