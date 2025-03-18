import React from 'react';

const Pagination = ({ currentPage, totalPages, totalRecords, limit, onPageChange, onLimitChange  }) => {
    const limitOptions = [10, 20, 30, 50, 100];
    return (
        <div>
            <div className='pendingpayment6'>
                <div className='pendingpayment7'>
                    <h6>Total:</h6>
                    <span>{totalRecords} Records</span>
                </div>

                <div className='pendingpayment8'>
                    <p>Page: {currentPage}</p>
                </div>

                <div className='pendingpayment9'>
                    <p>Records</p>
                    <div className='pendingpayment10'>
                        <select
                            value={limit}
                            onChange={(e) => onLimitChange(Number(e.target.value))}
                        >
                            {limitOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='admission18'>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
