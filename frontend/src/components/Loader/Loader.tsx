import style from "@/components/Loader/Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
