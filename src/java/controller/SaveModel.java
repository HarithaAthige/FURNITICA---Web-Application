package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.Brand;
import hibernate.HibernateUtil;
import hibernate.Model;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Util;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

@MultipartConfig
@WebServlet(name = "SaveModel", urlPatterns = {"/SaveModel"})
public class SaveModel extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String model = request.getParameter("model");
        String brandId = request.getParameter("brandId");

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("status", false);

        SessionFactory sf = HibernateUtil.getSessionFactory();
        Session s = sf.openSession();

        Criteria c1 = s.createCriteria(Model.class);
        c1.add(Restrictions.eq("name", model));
        List<Model> modelList = c1.list();

        if (model == null || model.trim().isEmpty()) {
            responseObject.addProperty("message", "Please Enter Model");
        } else if (!modelList.isEmpty()) {
            responseObject.addProperty("message", "Model already exists");
        } else if (!Util.isInteger(brandId)) {
            responseObject.addProperty("message", "Error");
        } else if (Integer.parseInt(brandId) == 0) {
            responseObject.addProperty("message", "Please Select Brand");
        } else {
            Brand brand = (Brand) s.get(Brand.class, Integer.valueOf(brandId));
            Model m = new Model();
            m.setName(model);
            m.setBrand(brand);
            s.save(m);
            s.beginTransaction().commit();
            s.close();
            responseObject.addProperty("status", true);
        }
        Gson gson = new Gson();
        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseObject));

    }

}
