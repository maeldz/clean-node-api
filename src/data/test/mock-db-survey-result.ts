import { SaveSurveyResultRepository } from '~/data/protocols/db/survey-result/save-survey-result-repository'
import { SurveyResultModel } from '~/domain/models/survey-result'
import { mockSurveyResultModel } from '~/domain/test/mock-survey-result'
import { SaveSurveyResultParams } from '~/domain/usecases/survey-result/save-survey-result'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (surveyData: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return mockSurveyResultModel()
    }
  }

  return new SurveyResultRepositoryStub()
}