
import { NextPageWithLayout } from "@/pages/_app";
import styles from "./styles.module.css";
import Layout from "@/layout/layout";
import { useReactTable } from "@tanstack/react-table";


const Home:NextPageWithLayout = () => {

    // const table = useReactTable();
    return(
        
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Task</th>
                            <th>Date1</th>
                            <th>Date2</th>
                            <th>Date3</th>
                            <th>Date4</th>
                            <th>Date5</th>
                            <th>Date6</th>
                            <th>Date7</th>
                            <th>Done</th>
                            <th>Task Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dashboards</td>
                            <td><select></select></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Dashboards</td>
                            <td><select></select></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        
    )
}

Home.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
}

export default Home;