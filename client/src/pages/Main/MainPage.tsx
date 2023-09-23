import { Photo } from 'components/Photo/Photo';
import { Link } from 'components/Link/Link';
import { Links } from './MainPage.const';

import './MainPage.scss';

export function MainPage() {
    return (
        <div className="Page Page__Main">
            <div className="Page__Main-About">
                <Photo />
                <p className="Typo">Kletskov Gleb</p>
                <p className="Typo">Software engineer, Yandex</p>
                <p className="Typo">Belgrade, Serbia</p>
            </div>
            <div className="Page__Main-Social">
                <Link
                    url={Links.github}
                    iconLeft="github"
                >
                    Github
                </Link>
                <Link
                    url={Links.email}
                    iconLeft="mail"
                >
                    gfgfddgleb@gmail.com
                </Link>
            </div>
        </div>
    )
}