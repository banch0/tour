export const loadJob = jobId => dispatch => Promise.resolve()
  .then(() => dispatch({
    type: JOB_FETCH,
  }))
  .then(() => api.getJob(jobId))
  .then(job => {
    dispatch({
      type: JOB_DONE,
      payload: job,
    });
  })
  .catch(error => {
    console.error(error);
    dispatch({
      type: JOB_ERROR,
      payload: error,
    });
  });
  https://maxfarseer.gitbooks.io/redux-course-ru/content/asinhronnie_actions.html
  https://rajdee.gitbooks.io/redux-in-russian/content/docs/recipes/ReducingBoilerplate.html
  export function* handleApiCall(action) {
    const {entity, payload} = action;
  
    yield put(makeAction(entity + START, payload));
    try {
      const locale = yield select(getLocale);
      const response = yield call(apiRequest, action, locale);
  
      const result = yield handleResponse(entity, response, payload);
      yield put(makeAction(entity + SUCCESS,response)
    } catch (error) {
      const errorResult = yield handleErrors(error.response || error);
      yield put(makeAction(entity + FAIL, errorResult));
    }
  }