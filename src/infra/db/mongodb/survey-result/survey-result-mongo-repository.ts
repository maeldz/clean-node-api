import { SaveSurveyResultParams, SaveSurveyResultRepository, SurveyResultModel } from '~/data/usecases/survey-result/save-survey-result/db-save-survey-result-protocols'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (surveyData: SaveSurveyResultParams): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    const res = await surveyResultCollection.findOneAndUpdate({
      surveyId: surveyData.surveyId,
      accountId: surveyData.accountId
    }, {
      $set: {
        answer: surveyData.answer,
        date: surveyData.date
      }
    }, {
      upsert: true,
      returnOriginal: false
    })
    return res.value && MongoHelper.map(res.value)
  }
}
