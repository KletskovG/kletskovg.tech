import { PHOTO_SRC } from './Photo.const';

import './Photo.scss';

export function Photo() {
    return (
        <img className="Photo" src={PHOTO_SRC} alt="My personal photo" />
    )
}