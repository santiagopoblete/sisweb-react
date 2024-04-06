

interface Props {

}

const DeleteProductModal = (_props: Props) => {
  return (
    <div
      id="modal-delete-product"
      className="modal"
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box p-0">
          <nav className="panel is-warning">
            <p className="panel-heading">All Products</p>
            <div className="panel-block pt-5 pb-5">
              <p>Do you want to delete the product?</p>
            </div>
            <div className="panel-block">
              <div className="field is-grouped ">
                <button
                  className="button is-primary"
                  onClick={() => { }}
                >
                  Confirm
                </button>
                <button
                  className="button"
                  onClick={() => {}}
                >
                  Cancel
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => {}}
      ></button>
    </div>
  );
};

export default DeleteProductModal;
