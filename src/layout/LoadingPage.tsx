import classes from "./LoadingPage.module.css";
const LoadingPage = () => {
  return (
    <div className={classes.load} data-testid="loaderComponentId">
      <div className={classes["load-icon"]}></div>
    </div>
  );
};

export default LoadingPage;
