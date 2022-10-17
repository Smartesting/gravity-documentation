import styles from './Alert.module.scss';

export enum AlertType {
  "info",
  "success",
  "warning",
  "danger",
}

export default function Alert({title, type, children}: React.PropsWithChildren<{title?: string, type: AlertType}>) {

  let computedClass = "", defaultTitle = "";

  switch(type) {
    case AlertType.info:
      computedClass = styles.alertInfo;
      break;
    case AlertType.success:
      computedClass = styles.alertSuccess;
      break;
    case AlertType.warning:
      computedClass = styles.alertWarning;
      break;
    case AlertType.danger:
      computedClass = styles.alertDanger;
      break;
  }

  return <div className={`${styles.alert} ${computedClass}`}>
    {title? <h5>{title}</h5> : <></>}
    { children }
  </div>
}