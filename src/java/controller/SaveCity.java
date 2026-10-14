package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.City;
import hibernate.HibernateUtil;
import hibernate.Quality;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import jdk.jfr.Category;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

@MultipartConfig
@WebServlet(name = "SaveCity", urlPatterns = {"/SaveCity"})
public class SaveCity extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String city = request.getParameter("city");

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("status", false);

        SessionFactory sf = HibernateUtil.getSessionFactory();
        Session s = sf.openSession();

        Criteria c1 = s.createCriteria(City.class);

        c1.add(Restrictions.eq("name", city));
        List<City> cityList = c1.list();

        if (city == null || city.trim().isEmpty()) {
            responseObject.addProperty("message", "Please Enter City Name");
        } else if (!cityList.isEmpty()) {
            responseObject.addProperty("message", "City already exists");
        } else {
            City c = new City();
            c.setName(city);

            s.save(c);
            s.beginTransaction().commit();
            s.close();
            responseObject.addProperty("status", true);
        }
        Gson gson = new Gson();
        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseObject));

    }

}
