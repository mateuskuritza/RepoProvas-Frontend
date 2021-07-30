import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import PageContainer from "../../assets/styles/PageContainer";
import { useParams } from "react-router-dom";
import SubjectsList from "./SubjectsList";
import { useEffect } from "react";
import useGetPeriodsSubjets from "../../requests/getPeriodsSubjects";

export default function Subjects() {

    const { courseId } = useParams<{ courseId: string }>();
    const { loading, error, data, fetchData } = useGetPeriodsSubjets(Number(courseId));

    useEffect(() => {
        fetchData();
    }, [courseId])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <PageContainer>
            <Logo />
            <Container>
                {data.map(period => period.subjects.length === 0 ? null : <SubjectsList key={period.id} data={period} />)}
            </Container>
        </PageContainer>
    );
}

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`