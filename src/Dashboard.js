import { Card, Col, Divider, Row, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import "./Dashboard.scss";

const Dashboard = () => {
    const [data, setData] = useState({
        totalCars: 0,
        carsInService: 0,
        totalJobs: 0,
        completedJobs: 0,
        jobsInProgress: 0,
        jobsCompletedToday: 0,
        carInfo: [],
        serviceJobs: []
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        const response = await fetch('/api/dashboard'); // Example endpoint
        const result = await response.json();

        setData({
            totalCars: result.totalCars,
            carsInService: result.carsInService,
            totalJobs: result.totalJobs,
            completedJobs: result.completedJobs,
            jobsInProgress: result.jobsInProgress,
            jobsCompletedToday: result.jobsCompletedToday,
            carInfo: result.carInfo, // Array of car information
            serviceJobs: result.serviceJobs // Array of service job details
        });
    };

    const carColumns = [
        { title: "Car ID", dataIndex: "carId", key: "carId" },
        { title: "Registration Number", dataIndex: "registrationNumber", key: "registrationNumber" },
        { title: "Car Model", dataIndex: "carModel", key: "carModel" },
        { title: "Owner's Name", dataIndex: "ownerName", key: "ownerName" },
        { title: "Assigned Mechanic", dataIndex: "assignedMechanic", key: "assignedMechanic" },
        { title: "Car Status", dataIndex: "carStatus", key: "carStatus" },
        { title: "Arrived Date", dataIndex: "arrivedDate", key: "arrivedDate" },
        { title: "Action", dataIndex: "action", key: "action" },
    ];

    const jobColumns = [
        { title: "Job ID", dataIndex: "jobId", key: "jobId" },
        { title: "Registration Number", dataIndex: "registrationNumber", key: "registrationNumber" },
        { title: "Job Type", dataIndex: "jobType", key: "jobType" },
        {
            title: "Job Status", dataIndex: "jobStatus", key: "jobStatus",
            render: (status) => {
                let color = "";
                if (status === "Completed") color = "gray";
                else if (status === "In Progress") color = "green";
                else if (status === "Not Started") color = "red";

                return <Tag color={color}>{status}</Tag>;
            }
        },
        { title: "Assigned Mechanic", dataIndex: "assignedMechanic", key: "assignedMechanic" },
        { title: "Start Date", dataIndex: "startDate", key: "startDate" },
        { title: "Estimated Date", dataIndex: "estimatedDate", key: "estimatedDate" },
        { title: "Completed Date", dataIndex: "completedDate", key: "completedDate" },
        { title: "Action", dataIndex: "action", key: "action" },
    ];

    return (
        <div className="dashboard-container">
            <Row gutter={16}>
                <Col span={8}>
                    <h3>Car</h3>
                    <Divider />
                </Col>
                <Col span={16}>
                    <h3>Job</h3>
                    <Divider />
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={4}>
                    <Card title={<span className="card-title">Total Cars</span>} bordered={false} size="small">
                        <span className="card-count">{data.totalCars}</span>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title={<span className="card-title">Cars in Service</span>} bordered={false} size="small">
                        <span className="card-count">{data.carsInService}</span>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title={<span className="card-title">Total Jobs</span>} bordered={false} size="small">
                        <span className="card-count">{data.totalJobs}</span>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title={<span className="card-title">Completed Jobs</span>} bordered={false} size="small">
                        <span className="card-count">{data.completedJobs}</span>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title={<span className="card-title">Jobs in Progress</span>} bordered={false} size="small">
                        <span className="card-count">{data.jobsInProgress}</span>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title={<span className="card-title">Jobs Completed Today</span>} bordered={false} size="small">
                        <span className="card-count">{data.jobsCompletedToday}</span>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={24}>
                <Col span={24}>
                    <h3>Car Information</h3>
                    <Table
                        columns={carColumns}
                        dataSource={data.carInfo}
                        pagination={{ pageSize: 5 }}
                        rowKey="carId"
                    />
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={24}>
                    <h3>Service Job Details</h3>
                    <Table
                        columns={jobColumns}
                        dataSource={data.serviceJobs}
                        pagination={{ pageSize: 5 }}
                        rowKey="jobId"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
