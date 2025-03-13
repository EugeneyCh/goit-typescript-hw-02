import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

function LoadMoreBtn({ handleLoadMore }: LoadMoreBtnProps) {
  return (
    <div className={s.loadMoreBtn}>
      <button type="button" className={s.button} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}
export default LoadMoreBtn;
