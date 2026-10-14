package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.Color;
import hibernate.HibernateUtil;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

@MultipartConfig
@WebServlet(name = "SaveColor", urlPatterns = {"/SaveColor"})
public class SaveColor extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String color = request.getParameter("color");

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("status", false);

        SessionFactory sf = HibernateUtil.getSessionFactory();
        Session s = sf.openSession();

        Criteria c1 = s.createCriteria(Color.class);

        c1.add(Restrictions.eq("value", color));
        List<Color> colorList = c1.list();

        if (color == null || color.trim().isEmpty()) {
            responseObject.addProperty("message", "Please Enter Color");
        } else if (!colorList.isEmpty()) {
            responseObject.addProperty("message", "Color already exists");
        } else {
            Color c = new Color();
            c.setValue(color);

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
