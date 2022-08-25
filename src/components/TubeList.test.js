import {render,screen,waitFor} from "@testing-library/react";
import TubeList from "./TubeList";
import * as api from '../api';

jest.mock("../api")

describe('Tubelist Component',()=>{
    beforeEach(()=> {jest.clearAllMocks()});
    it('should render tube names when api responds', async ()=> {
        api.getTubeData.mockResolvedValue(
            [
                {
                    name: "Bakerloo",
                    lineStatuses: [
                        {
                            $type: "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                            created: "0001-01-01T00:00:00",
                            id: 0,
                            statusSeverity: 10,
                            statusSeverityDescription: "Good Service",
                            validityPeriods: []
                        }
                    ]
                }
            ]
        );
        render(<TubeList/>);
        await waitFor(()=> {
            screen.getByText("Bakerloo");
        })
        
    })
    it('should render tube names when api fails', async ()=> {
        api.getTubeData.mockRejectedValue(
            []
        );
        render(<TubeList/>);
        await waitFor(()=> {
            screen.getByText("Please try after sometime. No data found.");
        })
        
    })
})