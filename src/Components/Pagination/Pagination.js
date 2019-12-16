import React from 'react';

export default class Pagination extends React.Component {

    render() {
        let buttons = Array(this.props.totalPages).fill(null);
        let currentPage = this.props.currentPage;
        return (
            //<div className="container">
                <div className="col-4 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            
                            <li className={currentPage == 1 ? "page-item disabled" : "page-item"}><a className="page-link disabled" onClick={() => this.props.handlePagination(currentPage - 1)}>Previous</a></li>
                            {buttons.map((item, index) => {
                                return <li className={currentPage == index + 1 ? "page-item active" : "page-item"}><a className="page-link" onClick={() => this.props.handlePagination(index + 1)}>{index + 1}</a></li>
                            })}
                            <li className={currentPage == this.props.totalPages ? "page-item disabled" : "page-item"}><a className="page-link" onClick={() => this.props.handlePagination(currentPage + 1)}>Next</a></li>
                        </ul>
                    </nav>
                </div>
            //</div>
        );
    }
}