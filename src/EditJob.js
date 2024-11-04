import { Button, Col, DatePicker, Divider, Form, Row, Select } from "antd";
import { useEffect, useState } from "react";
import './EditJob.scss';

const AddJob = () => {
    const [form] = Form.useForm();
    const [cars, setCars] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [jobStatuses, setJobStatuses] = useState([]);

    useEffect(() => {
        // Simulate fetching data from the backend
        fetchCarData();
        fetchMechanicData();
        fetchJobStatusData();
    }, []);

    const fetchCarData = async () => {
        // Replace with actual API call
        const carData = await fetch('/api/cars');
        const cars = await carData.json();
        setCars(cars);
    };

    const fetchMechanicData = async () => {
        // Replace with actual API call
        const mechanicData = await fetch('/api/mechanics'); // Example endpoint
        const mechanics = await mechanicData.json();
        setMechanics(mechanics);
    };

    const fetchJobStatusData = async () => {
        // Replace with actual API call
        const jobStatusData = await fetch('/api/jobStatuses'); // Example endpoint
        const jobStatuses = await jobStatusData.json();
        setJobStatuses(jobStatuses);
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < new Date().setHours(0, 0, 0, 0);
    };

    return (
        <>
            <Form
                form={form}
                name="editJob"
                className="edit-job-form"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h2>Add Job</h2>
                <Divider />

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Select Car"
                            name="selectCar"
                            rules={[{ required: true, message: "Please select a car" }]}
                        >
                            <Select placeholder="Select car">
                                {cars.map(car => (
                                    <Select.Option key={car.id} value={car.id}>
                                        {car.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Job Type"
                            name="jobType"
                            rules={[{ required: true, message: "Please enter job type!" }]}
                        >
                            <Select placeholder="Select job type">
                                {/* Example static options */}
                                <Select.Option value="repair">Repair</Select.Option>
                                <Select.Option value="maintenance">Maintenance</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Assigned Mechanic"
                            name="assignedMechanic"
                            rules={[{ required: true, message: "Please select assigned mechanic!" }]}
                        >
                            <Select placeholder="Select assigned mechanic">
                                {mechanics.map(mechanic => (
                                    <Select.Option key={mechanic.id} value={mechanic.id}>
                                        {mechanic.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Estimated Time"
                            name="estimatedTime"
                            rules={[{ required: true, message: "Please select estimated time!" }]}
                        >
                            <DatePicker
                                disabledDate={disabledDate}
                                style={{ width: '100%' }}
                                placeholder="Select estimated time"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Job Status"
                            name="jobStatus"
                            rules={[{ required: true, message: "Please select job status!" }]}
                        >
                            <Select placeholder="Select job status">
                                {jobStatuses.map(status => (
                                    <Select.Option key={status.id} value={status.id}>
                                        {status.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={4}>
                        <Button type="primary" htmlType="submit" block>
                            Save Changes
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

export default AddJob;
