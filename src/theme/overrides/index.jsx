import { merge } from 'lodash';
import Input from './Input';
import Lists from './Lists';

export default function ComponentsOverrides(theme) {
    return merge(
        Lists(theme),
        Input(theme)
    )
}