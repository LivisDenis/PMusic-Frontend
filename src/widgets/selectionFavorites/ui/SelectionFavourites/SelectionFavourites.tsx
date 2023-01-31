import styles from './SelectionFavourites.module.scss';
import { ISelectionItem } from '../../types';
import { SelectionFavouriteList } from '../SelectionFavouritesList/SelectionFavouritesList';

interface ISelection {
  header: string;
  selection: ISelectionItem[];
}

interface IPropsSelections {
  selectionList: ISelection[];
}

export const SelectionFavourites = ({ selectionList }: IPropsSelections) => {
  return (
    <div className={styles.albumList}>
      {selectionList.map((selection: ISelection, i) => (
        <SelectionFavouriteList key={i} category={selection.header} selection={selection.selection} />
      ))}
    </div>
  );
};

