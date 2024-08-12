import { message, Form, Input, Button, FormProps } from "antd"
import { Iusers } from "../InterFace/users";


const SignIn = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [form] = Form.useForm();

    const onFinish: FormProps<Iusers>["onFinish"] = (values: any) => {
        console.log(values);
        

    }
    return (
        <div>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên của bạn"
                    name="name"
                    rules={[
                        { required: true, message: 'Bạn chưa nhập Tên' },
                        {type:"string" , message :"Tên Không hợp lệ"}
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email của bạn"
                    name="email"
                    rules={[
                        { required: true, message: 'Bạn chưa nhập email' },
                        {type:"email" , message :"Email Không hợp lệ"}
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Bạn chưa nhập mật khẩu' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignIn
