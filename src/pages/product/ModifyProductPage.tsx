interface Props {
  id?: number;
}

const ModifyProductPage = (props: Props) => {
  return (
    <>
      <h1>Modify your product {props.id}</h1>
    </>
  );
};

export default ModifyProductPage;
