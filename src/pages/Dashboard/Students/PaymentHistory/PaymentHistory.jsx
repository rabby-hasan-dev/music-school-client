
import UsePayments from "../../../../Hooks/UsePayments";
const PaymentHistory = () => {
    const [payments]=UsePayments();

    return (
        <div className="w-full">
            <h3 className="text-5xl text-center mb-12 uppercase font-semi-bold h-[60]">Payment History</h3>
            <div className="uppercase  font-semi-bold h-[60] flex justify-evenly items-center">
                <h3 className="text-2xl">total Payment History :{ payments.length}</h3>


            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>

                            <th>Transaction Id</th>
                            <th>Date & Time</th>
                           
                            <th> Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                             payments.map((paymentItem, index) => <tr
                                key={paymentItem._id}
                            >
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {paymentItem.transactionId}
                                </td>
                                <td>
                                    {paymentItem.Date}
                                </td>
                               
                                <td>${paymentItem.price}</td>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;