import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Programs() {
    return (
        <div className="container align-items-md-center">
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-5">
                    <Card style={{ width: '14rem' }}>
                        <Card.Body>
                            <Card.Title>TESDA HOUSEKEEPING NCII</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fully-Funded</Card.Subtitle>
                            <Card.Text>
                                For more details please contact the officer in-charge in your respective barangays.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-xl-3 col-sm-6 py-5">
                    <Card style={{ width: '14rem' }}>
                        <Card.Body>
                            <Card.Title>NATIVE KAMBING DISTRIBUTION</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Random Draw</Card.Subtitle>
                            <Card.Text>
                                For more details please contact the officer in-charge in your respective barangays.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-xl-3 col-sm-6 py-5">
                    <Card style={{ width: '14rem' }}>
                        <Card.Body>
                            <Card.Title>IP MONTH CELEBRATION</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Contest</Card.Subtitle>
                            <Card.Text>
                                For more details please contact the officer in-charge in your respective barangays.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>
        </div>

    );
}


