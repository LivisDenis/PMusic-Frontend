import SelectionList from './selectionList/SelectionList';
import styles from './Selections.module.scss';

export interface IItemForSelection {
  trackName?: string;
  albumName: string;
  author: string;
  cover: string;
}

interface ISelection {
  header: string;
  selection: IItemForSelection[];
}

interface IPropsSelections {
  selectionList: ISelection[];
}

const Selections = ({ selectionList }: IPropsSelections) => {
  return (
    <div className={styles.albumList}>
      {selectionList.map((selection: ISelection, i) => (
        <SelectionList key={i} category={selection.header} selection={selection.selection} />
      ))}
    </div>
  );
};

export { Selections };