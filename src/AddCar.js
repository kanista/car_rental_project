import {Button, Form, Input, Row, Col, Divider} from "antd";
import './AddCar.scss'

const AddCar = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form values:", values);
    };

    return (
        <>
            <Form
                form={form}
                name="addCar"
                className="add-car-form"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h2>Add New Car</h2>

                <Divider />

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Car Registration Number"
                            name="carRegistrationNumber"
                            rules={[{ required: true, message: "Please enter a valid car registration number!" }]}
                        >
                            <Input placeholder="Enter car registration number" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Car Model"
                            name="carModel"
                            rules={[{ required: true, message: "Please enter a valid car model!" }]}
                        >
                            <Input placeholder="Enter car model" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Owner's Name"
                            name="ownerName"
                            rules={[{ required: true, message: "Please enter the owner's name!" }]}
                        >
                            <Input placeholder="Enter owner's name" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Contact Number"
                            name="contactNumber"
                            rules={[{ required: true, type:"number", message: "Please enter a valid contact number!" }]}
                        >
                            <Input placeholder="Enter contact number" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={8}>
                    <Col span={4}>
                        <Button type="primary" htmlType="submit" block>
                            Add Car
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button type="default" block>
                            Cancel
                        </Button>
                    </Col>
                </Row>

            </Form>
        </>
    );
};

export default AddCar;
